# First one

![h1](https://i.imgur.com/5wdA6CN.jpg)

index.ejs

````html
<body>
  <h1><%= title %></h1>
  <p>Welcome to <%= title %></p>
  <p></p>
  <h3>My name is <%= name %></h3>
  <h3>My student id is <%= id %></h3>
</body>
```
````

**index.js**

```js
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'chenlianghua',
    id: '209410306',
  });
});
```

# Two

![h2](https://i.imgur.com/gkqv8AJ.jpg)

# Three

![h3](https://i.imgur.com/vwmulAF.jpg)

# Four

![h3](https://i.imgur.com/nhy20AP.jpg)

# Five

![h4](https://i.imgur.com/eDNdFSo.jpg)

# Six

![h5](https://i.imgur.com/ZRLiXs2.jpg)

123
