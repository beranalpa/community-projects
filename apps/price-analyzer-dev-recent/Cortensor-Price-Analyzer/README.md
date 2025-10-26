<div align="center">

  <img src="https://avatars.githubusercontent.com/u/174224856?s=200&v=4" alt="Project Logo" width="150">

# **Cortensor Price Analyzer**

<p>
<a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"></a>
<a href="./STATUS.md"><img src="https://img.shields.io/badge/status-active-success.svg" alt="Status"></a>
<a href="#"><img src="https://img.shields.io/badge/Next.js-15.2-blue.svg" alt="Next.js Version"></a>
</p>

<p align="center">
<a href="#-overview">Overview</a> •
<a href="#-features">Features</a> •
<a href="#-getting-started">Getting Started</a> •
<a href="#-usage">Usage</a> •
<a href="#-api-endpoints">API Endpoints</a> •
<a href="#-maintainer">Maintainer</a> •
<a href="#-contributing">Contributing</a> •
<a href="#-license">License</a>
</p>
</div>

## 📌 Overview

Cortensor Price Analyzer is a Next.js application that delivers AI-assisted market intelligence across equities, ETFs, cryptocurrencies, forex pairs, and core commodities. It combines resilient market-data fallbacks, automated technical and fundamental analytics, and Cortensor-generated narratives so traders can move from idea to action in one dashboard.

## ✨ Features

- **Multi-Asset Coverage:** Analyze equities, ETFs, crypto pairs, forex pairs, and major commodities from a single form.
- **Resilient Data Fallbacks:** Cascade through Alpha Vantage, Stooq, TwelveData, and CoinGecko to avoid gaps in prices or historical candles.
- **AI Narrative & Insights:** Produce Cortensor-powered narratives, key takeaways, opportunities, risks, and horizon guidance.
- **Technical & Fundamental Highlights:** Surface RSI, MACD, SMA stack, volatility, valuation ratios, dividend yield, margins, and more.
- **Headline Summaries:** Attach recent news with sentiment tags to connect narrative flow to price action.
- **Saved Analysis Library:** Store, search, reload, and delete past scans for rapid comparisons.
- **Responsive UI & Charting:** Review price history and metrics across desktop and tablet layouts.

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or newer
- npm (bundled with Node.js)

### Installation

```bash
git clone https://github.com/cortensor/community-projects.git
cd apps/Cortensor-Price-Analyzer
npm install
```

### Environment Variables

Create a `.env.local` file (or copy from `.env.example`) and populate the necessary keys:

```ini
ALPHAVANTAGE_API_KEY=your_alpha_vantage_key
TWELVEDATA_API_KEY=your_twelvedata_key
COINGECKO_API_KEY=your_coingecko_key
FMP_API_KEY=your_financial_modeling_prep_key
CORTENSOR_API_KEY=your_cortensor_key
CORTENSOR_BASE_URL=http://<routerip>:5010
```

Optional keys (`NEWS_API_KEY`, `TAVILY_API_KEY`, `GOOGLE_API_KEY`, `GOOGLE_SEARCH_ENGINE_ID`) further enrich news sourcing.

## ▶️ Usage

Start the development server and open the app in your browser:

```bash
npm run dev -- --port 3004
```

Visit [http://localhost:3004](http://localhost:3004) and submit a ticker + asset type to generate a full analysis.

Generate a multi-provider market analysis.

```json
{
  "ticker": "AAPL",
  "assetType": "equity",
  "horizon": "3M"
}
```

## 👤 Maintainer

- **@beranalpa** (Discord)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

<div align="center">
<strong>Built with ❤️ for the Cortensor Community</strong>
</div>
