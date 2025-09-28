# Knowledge Model System

This project implements a knowledge model with hierarchical and relational classes, supporting inheritance, properties, parts, and exceptions in object classification.

The system models a domain of classes and their relationships with support for:

- **Is a**: inheritance hierarchies between classes.
- **Has property**: properties associated with classes.
- **Part of**: composition relationships indicating parts belonging to wholes.
- **Exception**: special cases where inherited properties are overridden or removed.

Interactive scenarios allow users to:

- Retrieve all properties (including inherited and exceptions) of a selected class.
- Check if two classes have any relationship.
- List all classes an object belongs to in hierarchical order.
- Find all realizations (specific instances) of a class.
- Find all classes that have a specific property or part, accounting for inheritance and exceptions.

The system uses a graph traversal approach with breadth-first search (BFS) to navigate hierarchical and relational links efficiently while respecting exceptions to accurately model inheritance nuances.

---

## Installation

To install the project, clone the repository and install dependencies using npm or pnpm:

```bash
git clone https://github.com/ODMyk/expert_system_lab
cd expert_system_lab
```

### Using pnpm:

```bash
pnpm i
```

### Using npm:

```bash
npm i
```

---

## Running the Project

To run the project, use the following command:

```bash
pnpm run run
```

or

```bash
npm run run
```

This will start the application and prompt you through the interactive scenarios for querying relationships, properties, and class hierarchies.
