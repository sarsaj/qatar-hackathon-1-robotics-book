# Data Model: Research paper on Digital Twin simulation using Gazebo & Unity

**Feature Branch**: `001-digital-twin-paper` | **Date**: 2025-12-07
**Spec**: ../spec.md | **Plan**: ./plan.md | **Research**: ./research.md

## Key Entities and Relationships (Conceptual Model for Research Content)

This data model describes the primary conceptual entities that the research paper "Digital Twin simulation using Gazebo & Unity" will focus on. This is a conceptual model to structure the research content and its potential interaction with a RAG chatbot.

### 1. Research Paper (Digital Twin Simulation using Gazebo & Unity)

-   **Description**: A comprehensive document evaluating digital twin technologies with a focus on simulation using Gazebo and Unity.
-   **Attributes**:
    -   `Title`: "Digital Twin simulation using Gazebo & Unity"
    -   `TargetAudience`: Robotics Engineers, Simulation Researchers
    -   `WordCountRange`: 3500-5000 words
    -   `ChapterCount`: 4 (as per `spec.md` and `research.md` decision)
    -   `Status`: Draft/In Progress/Completed
    -   `PublicationDate`: (ISO format)
-   **Relationships**:
    -   Contains many **Chapter** entities.
    -   Discusses **Digital Twin**, **Gazebo**, **Unity**, **Sensor** entities.
    -   References **Source** entities.

### 2. Chapter

-   **Description**: A subdivision of the Research Paper, focusing on a specific aspect of digital twin simulation.
-   **Attributes**:
    -   `Title`: (e.g., "Physics Simulation in Gazebo")
    -   `Content`: Markdown text, embedded figures/diagrams, conceptual code snippets.
    -   `IllustrativeExamples`: Conceptual descriptions of examples, not runnable code.
-   **Relationships**:
    -   Belongs to one **Research Paper**.
    -   Explains **Digital Twin**, **Gazebo**, **Unity**, **Sensor** concepts.

### 3. Digital Twin

-   **Description**: A virtual model designed to accurately reflect a physical object or system.
-   **Attributes**:
    -   `Definition`: Clear explanation.
    -   `Components`: Physical twin, virtual twin, data connection.
    -   `Applications`: (e.g., monitoring, prediction, optimization).
-   **Relationships**:
    -   Implemented/Simulated using **Gazebo** and **Unity**.
    -   Utilizes **Sensor** data.

### 4. Gazebo

-   **Description**: A multi-robot simulator for complex indoor and outdoor environments, emphasized for its physics engine.
-   **Attributes**:
    -   `Focus`: Physics simulation (gravity, collisions, environment building).
    -   `Capabilities`: Rigid body dynamics, contact physics, simulation of actuators/sensors.
-   **Relationships**:
    -   Used to simulate aspects of **Digital Twin**.
    -   Integrates with **Sensor** simulation.

### 5. Unity

-   **Description**: A real-time 3D development platform, emphasized for high-fidelity rendering and human-robot interaction.
-   **Attributes**:
    -   `Focus`: High-fidelity rendering, visualization, HRI.
    -   `Capabilities`: Advanced graphics, VR/AR integration, user interface development.
-   **Relationships**:
    -   Used to simulate aspects of **Digital Twin**.
    -   Integrates with **Sensor** simulation (for visualization).

### 6. Sensor

-   **Description**: Devices that detect and respond to physical input from the environment.
-   **Types**: LiDAR, Depth Camera, IMU (Inertial Measurement Unit).
-   **Attributes**:
    -   `PrincipleOfOperation`: How the sensor works.
    -   `SimulationTechnique`: Methods for simulating sensor data (e.g., ray tracing for LiDAR).
    -   `IntegrationMethods`: How simulated data is incorporated into the digital twin.
-   **Relationships**:
    -   Simulated within **Gazebo** and **Unity**.
    -   Provides data for **Digital Twin**.

### 7. Robotics Engineer / Simulation Researcher

-   **Description**: The primary audience for the research paper.
-   **Attributes**:
    -   `KnowledgeLevel`: Assumed technical background in robotics/simulation.
    -   `Goal`: Evaluate digital twin technologies, understand simulation aspects.
-   **Relationships**:
    -   Consumes **Research Paper** content.

### 8. Source

-   **Description**: Academic and reputable publications referenced in the paper.
-   **Attributes**:
    -   `Type`: Peer-reviewed journal, conference paper, book, technical report, etc.
    -   `APA_Citation`: Full APA style citation.
    -   `PublicationDate`: Used for "last 10 years" constraint.
-   **Relationships**:
    -   Supports claims made in **Research Paper** and **Chapter** entities.

## Relationships for RAG Chatbot (Content Ingestion)

The RAG chatbot will ingest the `Content` (Markdown text, including descriptions of figures and conceptual code) from all **Chapter** entities within this **Research Paper**. It will create vector embeddings of this content, stored in Qdrant, to facilitate retrieval augmented generation, enabling it to answer questions solely based on the paper's textual information.
