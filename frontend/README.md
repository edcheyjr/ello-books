# What this project does

this the UI for [node-api](https://github.com/edcheyj/node-api.git) and interacts with the api giving the user the abilty to add delete and view his or her notes.

#### How to run locally (Assumptiion the api is being served at http://localhost:8080)

the application will be opened in the following url: **`https:localhost:5173`**

ensure you have [nodejs](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed in your machine also ensuer you have the [serve](https://github.com/edcheyj/node-api.git) part running in you machine

- the clone this repository into your machine like this:

```
git clone https://github.com/edchejr/notes-app.git

```

- then do git pull check of any changes

```
git pull origin master

```

- go to that directory i.e:

```
cd notes-app

```

- then run the following commands

```
npm install
npm run dev

```

# The App Interface

<div style="display: flex; justify-content: space-between;">
  <img src="images/no-notes.png" alt="no-note" title="no-notes" style="max-width: 100%; max-height: 100%; width: auto; height: auto; margin-right: 10px;">
  <img src="images/notes.png" alt="notes" title="notes" style="max-width: 100%; max-height: 100%; width: auto; height: auto; margin-right: 10px;">
  <img src="images/add-new-note.png" alt="adding modal" title="adding a note modal" style="max-width: 100%; max-height: 100%; width: auto; height: auto; margin-right: 10px;">
  <img src="images/success.png" alt="Sucessfull deleted a note" title="Sucessfull deleted a note" style="max-width: 100%; max-height: 100%; width: auto; height: auto; margin-right: 10px;">
</div>

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
