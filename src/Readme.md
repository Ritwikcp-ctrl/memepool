# 📈 price-watcher

> Real-time crypto price stream engine — built from raw WebSockets, zero libraries for core logic.

![Status](https://img.shields.io/badge/status-in%20progress-00FF41?style=for-the-badge&labelColor=000000)
![JavaScript](https://img.shields.io/badge/javascript-vanilla-00FF41?style=for-the-badge&labelColor=000000&logo=javascript)
![Node](https://img.shields.io/badge/node-%3E%3D20-00FF41?style=for-the-badge&labelColor=000000&logo=node.js)

## What this is

A live price-watching pipeline built entirely from scratch — no `ethers.js`-style abstraction, no event-library crutch. Every core piece (event bus, queue, worker) is hand-built to actually understand what's happening under the hood, not just import a solution.

Streams live BTC/USDT trades from Binance's public WebSocket API, decouples ingestion from processing via a custom pub/sub system, and (soon) fires alerts on configurable price thresholds.

## Architecture