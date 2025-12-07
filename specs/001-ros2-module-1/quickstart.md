# Quickstart Guide: Module 1: The Robotic Nervous System (ROS 2)

**Feature Branch**: `001-ros2-module-1` | **Date**: 2025-12-07
**Spec**: ../spec.md | **Plan**: ../plan.md | **Research**: ../research.md
**Data Model**: ../data-model.md | **Contracts**: ./contracts/rag-ingestion-contract.md

## Overview

This Quickstart Guide provides instructions to set up your development environment and run the code examples associated with Module 1 of the AI & Robotics Book. This module focuses on ROS 2, Python agents, and URDF for humanoid robots.

## 1. Prerequisites

Before you begin, ensure you have the following installed:

-   **Operating System**: Ubuntu 22.04 LTS (Jammy Jellyfish) is recommended for ROS 2 development. Windows Subsystem for Linux (WSL2) with Ubuntu is also a viable option for Windows users.
-   **ROS 2**: Install the latest stable ROS 2 distribution (e.g., Iron Irwini). Follow the official ROS 2 installation guide for your operating system: [https://docs.ros.org/en/iron/Installation.html](https://docs.ros.org/en/iron/Installation.html)
-   **Python**: Python 3.9+ (usually included with ROS 2).
-   **`pip`**: Python package installer.
-   **`colcon`**: ROS 2 build tool (installed with ROS 2 development tools).
-   **Git**: For cloning the repository.
-   **Code Editor**: Visual Studio Code with the ROS 2 extension is recommended.

## 2. Environment Setup

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/E-AI-BOOK.git
    cd E-AI-BOOK
    ```
    *(Replace `your-username` with the actual repository owner)*

2.  **Source ROS 2 Environment**:
    ```bash
    source /opt/ros/iron/setup.bash
    ```
    *(Replace `iron` with your ROS 2 distribution name if different)*

3.  **Create a ROS 2 Workspace (Optional but Recommended)**:
    For developing and building your own ROS 2 packages, it's good practice to set up a workspace.
    ```bash
    mkdir -p ~/ros2_ws/src
    cd ~/ros2_ws/src
    ```

## 3. Running Code Examples

The code examples for Module 1 are located in the `book/module1/code-examples/` directory within this repository. Each example will typically have its own `README.md` with specific instructions.

1.  **Navigate to an example**:
    ```bash
    cd /path/to/E-AI-BOOK/book/module1/code-examples/your_example_name
    ```

2.  **Build the example (if it's a ROS 2 package)**:
    If the example is a ROS 2 package (contains `package.xml` and `CMakeLists.txt` or `setup.py`), you'll need to build it in a ROS 2 workspace.
    ```bash
    # Assuming you are in your ros2_ws/src directory
    git clone /path/to/E-AI-BOOK/book/module1/code-examples/your_example_name . # Copy example to workspace src
    cd ~/ros2_ws
    colcon build --packages-select your_example_name
    source install/setup.bash
    ```

3.  **Run the example**:
    Specific instructions will be provided in each example's `README.md`. Typically, this might involve:
    ```bash
    # For a Python ROS 2 node
    ros2 run your_package_name your_node_executable

    # For a standalone Python script
    python3 your_script.py
    ```

## 4. Simulation Environment Setup (e.g., Gazebo)

Many examples will involve robot simulations. Ensure you have Gazebo (or the specified simulator like Unity/Isaac Sim) installed and configured for ROS 2.

-   **Gazebo Installation**: Usually part of the `ros-iron-desktop` or `ros-iron-gazebo-ros-pkgs` package.
    ```bash
    sudo apt install ros-iron-gazebo-ros-pkgs # Adjust for your ROS 2 distro
    ```
-   **Launching a simulator**: Refer to the individual example's `README.md` for launching specific simulation environments.

## 5. RAG Chatbot Integration

To interact with the RAG chatbot based on this module's content, you will need to:
1.  Set up the chatbot backend (FastAPI, Neon Postgres, Qdrant).
2.  Ingest the Markdown content from `book/module1/` into the Qdrant vector database as per the `rag-ingestion-contract.md`.
Specific setup instructions for the chatbot will be provided in the main project's `README.md` or a dedicated chatbot setup guide.
