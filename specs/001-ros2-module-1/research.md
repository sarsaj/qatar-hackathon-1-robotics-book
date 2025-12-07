# Phase 0 Research Findings: Module 1: The Robotic Nervous System (ROS 2)

**Feature Branch**: `001-ros2-module-1` | **Date**: 2025-12-07
**Spec**: ../spec.md | **Plan**: ./plan.md

## Research for Key Decisions

### 1. Chapter breakdown per module with tradeoffs (depth vs. breadth)

-   **Decision**: Module 1 will focus on a balance of depth for core ROS 2 concepts and breadth for practical application, with 3 chapters as established in the spec (ROS 2 Basics, Python Agents & `rclpy`, URDF for Humanoids). Each chapter will aim for comprehensive understanding of its topic.
-   **Rationale**: This aligns with the "actionable knowledge" success criteria while staying within the word count and chapter count constraints. Focusing on 3 chapters allows sufficient depth without overwhelming the reader and provides a clear structure.
-   **Alternatives Considered**:
    -   **More chapters (e.g., 4)**: Could lead to less depth per topic due to content dispersion or risk exceeding word count constraints.
    -   **Fewer chapters (e.g., 2)**: Might oversimplify complex topics or force too much disparate content into a single chapter, reducing clarity.

### 2. Format of code examples (embedded snippets vs full files)

-   **Decision**: Both embedded code snippets and references to full, runnable example files will be used. Short, illustrative pieces will be embedded directly in the Markdown for immediate context. Longer, more complex, or complete runnable examples will be provided as separate files within a a `code-examples/` subdirectory, with clear links from the book text and instructions on how to run them.
-   **Rationale**: Embedded snippets offer immediate context and readability for quick illustrations and conceptual reinforcement. Providing full files ensures reproducibility and allows students to run and experiment with complete, working codebases, which is crucial for a technical topic like robotics. This approach aligns with the "Reproducibility" principle.
-   **Alternatives Considered**:
    -   **Only embedded snippets**: Limits the complexity of examples that can be shown, hinders reproducibility for larger codebases, and makes practical experimentation difficult.
    -   **Only full files with external links**: Breaks the reading flow, requires constant switching between book and external files, and provides less immediate illustration of concepts.

### 3. Level of robotics detail (humanoid-specific or generic ROS 2)

-   **Decision**: The module will cover generic ROS 2 concepts (nodes, topics, services, parameters) in detail to provide a broad understanding. However, specific examples, demonstrations, and URDF discussions will prioritize humanoid robotics where appropriate, to align with the overall project's thematic focus on AI and humanoid robotics and the URDF section of the feature specification.
-   **Rationale**: This approach balances the need for fundamental, universally applicable ROS 2 understanding with the specified focus on humanoid robots in the URDF section, providing relevant and engaging context for the target audience.
-   **Alternatives Considered**:
    -   **Exclusively humanoid examples**: Could make basic ROS 2 concepts seem overly specialized for beginners and limit general applicability of learned concepts.
    -   **Exclusively generic ROS 2 examples**: Would miss the opportunity to deeply connect with the project's humanoid robotics theme, particularly in sections like URDF, and might not be as engaging for the target audience.

### 4. RAG chatbot scope (all content vs selected text only)

-   **Decision**: The RAG chatbot will be configured to answer questions exclusively from the *entire* text content of the book module.
-   **Rationale**: This ensures the chatbot acts as a comprehensive and authoritative resource for the module, fulfilling the "RAG chatbot: answer only from book content" standard from the Constitution and providing maximal utility to students by allowing queries on any part of the module's detailed content.
-   **Alternatives Considered**:
    -   **Selected text only (e.g., summaries, key definitions)**: Would significantly limit the chatbot's usefulness and potentially frustrate users if it cannot answer questions from detailed or nuanced sections of the book.
    -   **Allowing external information/generative responses beyond book content**: Violates the "RAG chatbot: answer only from book content" standard and could lead to inaccuracies or "hallucinations," undermining the book's authority.
