# HTML Element Dependency Service
Makes some html elements dependent on others.  
If the dependency is removed from the DOM, the dependents are also removed after a while.

## Import
```html
<script src="https://cdn.jsdelivr.net/gh/acitd/HTMLElementDependencyService/HTMLElementDependencyService.js"></script>
```

## Initialization
You can create the service by defining the root element of the dependencies.
```js
const dependency_service=new HTMLElementDependencyService(document.body);
```
Then just start the service.
```js
dependency_service.start();
```

## Define a depencency
To define an element as a dependecy you can use the add(...) method with this syntax:
```js
𝘴𝘦𝘳𝘷𝘪𝘤𝘦.add(𝘥𝘦𝘱𝘦𝘯𝘥𝘦𝘯𝘤𝘺,...𝘥𝘦𝘱𝘦𝘯𝘥𝘦𝘯𝘵𝘴);
```
## Example
```js
const head=document.querySelector('head');
const main=document.querySelector('main');
const footer=document.querySelector('footer');
dependency_service.add(head,main,footer);    // we make the main and the footer element dependants of the head

const aside=document.querySelector('aside');
dependency_service.add(head,aside);    // we make the aside element too

// TEST
head.remove();    // now the head and all its dependents are removed afte a while

```
