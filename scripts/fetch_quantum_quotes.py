#!/usr/bin/env python3
"""
Automated Quantum & PQC Stock Snapshot & arXiv Paper Updater
Runs in GitHub Actions to fetch latest market metrics and arXiv quant-ph preprints.
"""
import json
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

TICKERS = [
    "IONQ", "RGTI", "QBTS", "QUBT", "INFQ", "XNDU", "PSQL",
    "LAES", "ARQQ", "WKEY",
    "GOOGL", "IBM", "MSFT", "NVDA", "AMZN", "HON",
    "NET", "PANW", "LSCC", "CRWD",
    "QTUM", "SPRX", "CIBR"
]

def fetch_latest_arxiv_quantum_papers(max_results=8):
    url = (
        "http://export.arxiv.org/api/query?"
        "search_query=cat:quant-ph+AND+(fault-tolerant+OR+error+correction+OR+trapped-ion+OR+superconducting)"
        f"&sortBy=submittedDate&sortOrder=descending&max_results={max_results}"
    )
    papers = []
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "QuantumTechInvestingBot/1.0"})
        with urllib.request.urlopen(req, timeout=15) as resp:
            xml_data = resp.read()
        root = ET.fromstring(xml_data)
        ns = {"atom": "http://www.w3.org/2005/Atom"}
        for entry in root.findall("atom:entry", ns):
            title = (entry.findtext("atom:title", "", ns) or "").strip().replace("\n", " ")
            published = (entry.findtext("atom:published", "", ns) or "")[:10]
            link = entry.findtext("atom:id", "", ns)
            authors = [a.findtext("atom:name", "", ns) for a in entry.findall("atom:author", ns)[:3]]
            papers.append({
                "title": title,
                "published": published,
                "url": link,
                "authors": ", ".join(filter(None, authors))
            })
    except Exception as exc:
        print(f"[WARN] Failed to fetch arXiv feed: {exc}")
    return papers

def main():
    out_dir = Path(__file__).resolve().parent.parent / "data"
    out_dir.mkdir(parents=True, exist_ok=True)
    feed_file = out_dir / "latest_arxiv_feed.json"

    papers = fetch_latest_arxiv_quantum_papers()
    payload = {
        "updated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "tracked_tickers": TICKERS,
        "latest_arxiv_papers": papers
    }
    feed_file.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Successfully updated {feed_file} with {len(papers)} latest arXiv papers.")

if __name__ == "__main__":
    main()
