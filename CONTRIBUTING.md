# Contributing to garden

Thanks for your interest in planting a flower in our garden! Here's how to contribute:

---

## 1. Fork and Clone

First, fork this repository and clone it to your local machine.

```bash
git clone https://github.com/myferr/garden.git
cd garden
```

---

## 2. Register Your Flower

Edit the `GARDEN.json` file at the root of the project:

```json
{
  "registered": [
    {
      "user": "your-github-username",
      "message": "Your message here!",
      "flower": "flower-name"
    }
  ]
}
```

- `user`: Your GitHub username (no `@`)
- `message`: Something fun, wholesome, or encouraging 🌸
- `flower`: Name of an ASCII flower (e.g. "rose", "sunflower", "tulip")

---

## 3. Make a Pull Request

Star this repository and after editing `GARDEN.json`, commit and push your changes:

```bash
git add GARDEN.json
git commit -m "Added my flower to the garden"
git push origin your-branch
```

Don't want to use `git`? [Check out the official GitHub docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

Then open a Pull Request with the title:

> `Add flower`

---

## 4. Review & Merge

Once reviewed, your flower will bloom in the public garden!

---

## Wanna contribute a flower?

- File: [deployment/lib/flowers.ts](https://github.com/myferr/garden/blob/main/deployment/lib/flowers.ts)

Make your flower ASCII art detailed and beautiful! Need inspiration? Check out:

- [asciiart.eu/plants](https://www.asciiart.eu/plants)
- [emojicombos.com/ascii-art-flowers](https://emojicombos.com/ascii-art-flowers)

Happy gardening! 🌷
