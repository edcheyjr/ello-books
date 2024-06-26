# How to run

the application will be opened in the following url: [**`https:localhost:5173`**](https:localhost:5173)

ensure you have [nodejs](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed in your machine also you have the [serve](https://github.com/edcheyjr/ello-books/backend) part running in you machine

- the clone this repository into your machine like this:

```
git clone https://github.com/edcheyjr/ello-books

```

- then do git pull check of any changes

```
git pull origin master

```

- go to that directory i.e:

```
cd frontend

```

- then run the following commands

```
npm install
npm run dev

```

or alternative for build preview run

```
npm install
npm run build
npm run preview

```

# The App Interface

<div style="display: flex; justify-content: space-between; flex-direction:column;">
<div style="margin-top:4px;">
<h3>reading list ui</h3>
  <img src="images/Screenshot_1.2.png" alt="books" title="nreading list" style="max-width: 100%; max-height: 100%; width: auto; height: auto; margin-right: 10px;">
  <!-- <img src="images/Screenshot_1.0.png" alt="books" title="nreading list" style="max-width: 100%; max-height: 100%; width: auto; height: auto; margin-right: 10px;"> -->
</div>
<div style="margin-top:4px;">
<h3>search ui</h3>
  <img src="images/Screenshot_2.2.png" alt="search" title="search of books" style="max-width: 100%; max-height: 100%; width: auto; height: auto; margin-right: 10px;">
  </div>
   <div style="margin-top:4px;">
      <h3>filter by level</h3>
      <img src="images/Screenshot_5.1.png" alt="filter by level image" title="filter by level image" style="max-width: 100%; max-height: 100%; width: auto; height: auto; margin-right: 10px;">
  </div>
  <div style="margin-top:4px;">
    <h3>empty state</h3>
    <img src="images/Screenshot_3.png" alt="empty state" title="no books in reading list" style="max-width: 100%; max-height: 100%; width: auto; height: auto; margin-right: 10px;">
  </div>
   <div style="margin-top:4px;">
      <h3>error state</h3>
      <img src="images/Screenshot_4.png" alt="error state" title="server error state" style="max-width: 100%; max-height: 100%; width: auto; height: auto; margin-right: 10px;">
  </div>
</div>

<br>
<br>

# Would like to improve

- [x] filter by levels
- [ ] improve search ui and search filter
- [ ] add the concept of user student and teacher
- [ ] customize search scrollbar
