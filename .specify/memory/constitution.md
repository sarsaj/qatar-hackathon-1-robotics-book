<!--
Version change: None -> 1.0.0
List of modified principles:
  - Accuracy (Added)
  - Clarity (Added)
  - Reproducibility (Added)
  - Rigor (Added)
  - Integration (Added)
Added sections: Key Standards, Project Constraints and Success Criteria
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md: ⚠ pending
  - .specify/templates/spec-template.md: ⚠ pending
  - .specify/templates/tasks-template.md: ⚠ pending
  - .specify/commands/*.toml: ⚠ pending (check for agent-specific names)
Follow-up TODOs: None
-->
# AI & Robotics Book with Integrated RAG Chatbot Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### Accuracy
<!-- Example: I. Library-First -->
All claims and information presented must be thoroughly verified against authoritative sources.
Rationale: Ensures the reliability and credibility of the content for a technical audience.
<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### Clarity
<!-- Example: II. CLI Interface -->
Content must be written with a clear, concise, and accessible style, tailored for an AI and robotics student audience.
Rationale: Facilitates understanding of complex technical concepts for the target readership.
<!-- Example: Every library exposes functionality via CLI; Text in/out protocol: stdin/args → stdout, errors → stderr; Support JSON + human-readable formats -->

### Reproducibility
<!-- Example: III. Test-First (NON-NEGOTIABLE) -->
All presented code, simulations, and AI models must be fully verifiable and reproducible by the reader.
Rationale: Enables practical learning and validation of theoretical concepts.
<!-- Example: TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced -->

### Rigor
<!-- Example: IV. Integration Testing -->
Prioritize peer-reviewed research, official documentation, and established best practices as primary sources of information.
Rationale: Maintains academic integrity and ensures the foundation of knowledge is sound.
<!-- Example: Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas -->

### Integration
<!-- Example: V. Observability, VI. Versioning & Breaking Changes, VII. Simplicity -->
The book, RAG chatbot, and associated simulations must provide a seamless and cohesive learning experience.
Rationale: Enhances the interactive and practical aspects of the educational material.
<!-- Example: Text I/O ensures debuggability; Structured logging required; Or: MAJOR.MINOR.BUILD format; Or: Start simple, YAGNI principles -->

## Key Standards
<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

- Citations: APA style, minimum 40% peer-reviewed sources
- Plagiarism: 0% tolerance
- Writing: Flesch-Kincaid grade 10–12
- Code: follow best practices (Python, ROS 2, TypeScript)
- RAG chatbot: answer only from book content
<!-- Example: Technology stack requirements, compliance standards, deployment policies, etc. -->

## Project Constraints and Success Criteria
<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

**Project Constraints:**
- Book: 50,000–70,000 words, deployed via Docusaurus/GitHub Pages
- Minimum 30 sources
- Robotics simulations: ROS 2, Gazebo, Unity, NVIDIA Isaac
- Chatbot: FastAPI + Neon Postgres + Qdrant + OpenAI Agents/ChatKit

**Success Criteria:**
- Verified claims and code
- Zero plagiarism
- Deployed book
- Functional RAG chatbot
- Simulated humanoid completes voice-to-action and navigation tasks
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

**Amendment Procedure:**
Amendments to this constitution require a consensus among project stakeholders, documented through formal review and approval. All proposed changes must clearly articulate their rationale and impact.

**Versioning Policy:**
This constitution adheres to semantic versioning (MAJOR.MINOR.PATCH).
- MAJOR version increments indicate backward-incompatible changes, removal of principles, or fundamental redefinitions.
- MINOR version increments signify the addition of new principles, significant expansion of guidance, or substantial modifications.
- PATCH version increments cover clarifications, wording refinements, typo corrections, and non-semantic updates.

**Compliance Review:**
Adherence to these principles and standards will be reviewed quarterly. Any deviations or non-compliance issues will be documented, with corrective actions planned and tracked to resolution.
<!-- Example: All PRs/reviews must verify compliance; Complexity must be justified; Use [GUIDANCE_FILE] for runtime development guidance -->

**Version**: 1.0.0 | **Ratified**: 2025-12-07 | **Last Amended**: 2025-12-07
<!-- Example: Version: 2.1.1 | Ratified: 2025-06-13 | Last Amended: 2025-07-16 -->
