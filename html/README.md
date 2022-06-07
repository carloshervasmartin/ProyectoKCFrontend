# html exercises

In this exercises you will have to complete the missing html or remark what should we include. For example:

What is wrong with this HTML?

```html
<customtag>lorem ipsum dolor</customtab>
```

Answer: It is using a key that does not exists.

## Exercise 1

Add what is missing in our html `<head>` tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
</html>
```

Answer: Faltan los `<meta>` tags (ya añadidos). Por ejemplo:
    ```
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>`
    ```

## Exercise 2

This html is not semantic what could we do to improve it.

```html
<div class="main">
  <div class="section">
    <div>
      <div class="list-item">List item</div>
      <div class="list-item">List item</div>
      <div class="list-item">List item</div>
      <div class="list-item">List item</div>
    </div>
  </div>
  <div class="section">
    <div class="form">
      <label>description</label>
      <input type="text">
    </div>
  </div>
</div>
```

Answer: Maybe we can simplify a bit:

<div class="main">
    <div class="section">
      <ul class="list-items">
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
        </ul>
      <div class="form">
        <label>description</label>
        <input type="text">
      </div>
    </div>
  </div>

## Exercise 3

If we want to include two CSS files like `reset.css`, `main.css`, and one javascript file `app.js`. Where should we include it in this html?

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href=main.css>
  <link rel="stylesheet" href=reset.css>
  <title>Document</title>
</head>
<body>


  <script src="app.js"></script> /*Recommended to add it at the end of the body*/
</body>
</html>
```

## Exercise 4

We need to improve this html form markup. This form will call and endpoint `/register` with the right method. We also have to include the correct input type and mark all fields as required.

```html
<form action = "/register" method="POST">
        <div>
          <label>name</label>
          <input type="text" name="name">
        </div>
        <div>
          <label>surname</label>
          <input type="text" name="surname">
        </div>
        <div>
          <label>phone</label>
          <input type="tel" name="phone">
        </div>
        <div>
          <label>email</label>
          <input type="email" name="email">
        </div>
        <div>
          <label>password</label>
          <input type="password" name="password">
        </div>
        <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
      </form>
```
