# Contributing to Garden

To keep Garden a safe and welcoming space for everyone, please follow these guidelines when submitting a flower.

## Community Guidelines

### Prohibited Content

- No NSFW/NSFL content
- No hate speech, discrimination, or harassment
- No self-promotion, spam, or advertisements
- No violent, disturbing, or graphic content
- No personal attacks or offensive messages

### Respect the Space

- Be kind — this is a creative, community-powered project.
- Keep messages short, thoughtful, and respectful.
- All contributions are public and visible — please be considerate.

Violations may result in the removal of your message or flower.

---

## How to Contribute

### 1. Fork and Clone

Fork this repository and clone it to your local machine:

```bash
git clone https://github.com/myferr/garden.git
cd garden
```

---

### 2. Register Your Flower

Edit the `GARDEN.json` file at the root of the project:

```json
{
  "registered": [
    {
      "user": "your-github-username",
      "message": "Your message here",
      "flower": "flower-name"
    }
  ]
}
```

- `user`: Your GitHub username (no `@`)
- `message`: A brief, appropriate message
- `flower`: Name of an ASCII flower (e.g., "rose", "sunflower", "tulip")

---

### 3. Create a Pull Request

After editing `GARDEN.json`, commit and push your changes:

```bash
git add GARDEN.json
git commit -m "Add my flower to the garden"
git push origin your-branch
```

Then open a Pull Request with the title:

> Add flower

Reference: [GitHub Docs – Creating a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

---

### 4. Review and Merge

Once reviewed, your flower will be added to the garden.

---

## Adding Custom Flower Art

To contribute a custom flower in ASCII art:

- File: [`deployment/lib/flowers.ts`](https://github.com/myferr/garden/blob/main/deployment/lib/flowers.ts)

You may find inspiration from:

- https://www.asciiart.eu/plants
- https://emojicombos.com/ascii-art-flowers

## Contributing to front-end and back-end
Front-end files are stored in [`deployment/`](https://github.com/myferr/garden/tree/main/deployment)
Back-end files are [`index.html`](https://github.com/myferr/garden/blob/main/index.html) and [`api.js`](https://github.com/myferr/garden/blob/main/api.js), both stored in the root of the repository.
