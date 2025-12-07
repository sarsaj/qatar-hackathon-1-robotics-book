# API Contract: RAG Chatbot Content Ingestion

**Feature Branch**: `001-ros2-module-1` | **Date**: 2025-12-07
**Spec**: ../spec.md | **Plan**: ../plan.md | **Research**: ../research.md
**Data Model**: ../data-model.md

## Overview

This document describes the conceptual contract for how the RAG (Retrieval Augmented Generation) chatbot system will ingest and process the book content from Module 1. It outlines the expected input format and the subsequent processing steps relevant to the chatbot's functionality. This is not a traditional REST or GraphQL API but rather a definition of data flow for content consumption.

## Content Source

The primary source of content for the RAG chatbot is the Markdown files comprising the chapters of Module 1, as organized within the `book/module1/` directory.

## Ingestion Process

1.  **Content Extraction**: The RAG system will extract raw text content from the Markdown files (`.md`). This includes all narrative text, code snippets (without execution), and any explanatory comments within the content.
2.  **Text Chunking**: The extracted text will be segmented into manageable chunks suitable for vector embedding. Chunk size will be optimized for retrieval relevance and LLM context window limits.
3.  **Vector Embedding**: Each text chunk will be transformed into a numerical vector embedding using a pre-trained embedding model.
4.  **Storage in Vector Database**: The generated vector embeddings, along with their corresponding original text chunks and metadata (e.g., chapter title, section, page number), will be stored in the Qdrant vector database.

## Expected Input Format

-   **File Type**: Markdown (`.md`)
-   **Content Structure**: Standard Markdown with headings, paragraphs, lists, code blocks, and embedded images (textual descriptions of images will be used if available, otherwise image content is ignored by RAG).
-   **Metadata (implicit from file path/front matter)**:
    -   Module Title
    -   Chapter Title
    -   Section/Subsection (derived from Markdown headings)

## Output / Consumption by Chatbot

The RAG chatbot will query the Qdrant vector database using natural language queries. The most semantically relevant text chunks will be retrieved based on vector similarity. These retrieved chunks will then be used as context for a Large Language Model (LLM) to generate answers.

## Constraints & Rules

-   **Content Scope**: The chatbot MUST only answer from the ingested book content (Module 1). No external knowledge or internet search will be used.
-   **Accuracy**: Retrieved information MUST directly correspond to the source text.
-   **Source Attribution**: When generating answers, the chatbot SHOULD ideally reference the chapter/section from which the information was retrieved. (Future enhancement)
