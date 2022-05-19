# ngclass vs class-binding


How to use `ngclass`?

```html
<div [ngClass]="{
  class0: condition,
  classN: condition
}"></div>
```

And how would class-binding looks like?

```html
<div [class.class0]="condition"
     [class.classN]="condition"
></div>
```


## Test Scenario

### project structure

```
app.component.class.html => contains class-binding version of the template

app.component.ngclass.html => contains ngclass version of the template

app.component.css => basic css to provide the demo styles

app.component.ts => align state and callbacks for the buttons to change the alignment

index.html => basic resetted index file
```


### Do it yourself

just clone the [repository](https://github.com:SourceCodeBot/angular-class-binding-demo) and execute `npm start`.

on http://localhost:4200 you can direct interact with the current selected version.


### Test Plan

1. Open the Devtools
2. Open the [angular profiler plugin](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh)
3. switch to "profiler" tab
4. start recording by click the round button which become red by hover
5. press 
   1. top
   2. bottom
   3. left
   4. right
   5. center
6. click "safe profile" to export a json with the detail report


## my Result


| Direction | ngclass | Class-binding |
| :-------: | :-----: | :-----------: |
|    top    | 0,4999  |    0,2999     |
|  bottom   | 0,7000  |    0,4000     |
|   left    | 0,6000  |    0,4000     |
|   right   | 0,3999  |    0,3000     |
|  Center   | 0,4000  |    0,0999     |


## recommandation

to avoid complexity in your change detection circle you should probably use class-binding instead of ngclass.

for more complex usecases or if you want to bind a object with the typesignature `Record<string, boolean>` ngclass would be the right way.
