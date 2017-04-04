# sksar-grid
A Super Simple Lightweight Responsive Grid System created by me,  
(Only 768 bytes minified, and 3 KB source code)

What is SKSAR-GRID ?
---

SKSAR-GRID is a simple responsive grid system for modern web design. It is different from other Grid Systems, as it does not use fixed CSS media queries, but creates them automatically as and when needed.  
  
The very core of the grid contains a simple 12-column layout css grid, (sksar-grid.css) with no media query breaks. Then upon it styles are added dynamically using javascript (sksar-grid.js)..  

Installation
---
Import **sksar-grid.css** in the `<head>` section of your html file..

```
<link rel="stylesheet" href="path/to/sksar-grid.css" />
```
Import **sksar-grid.js** at the end of your html file..

```
<script src="path/to/sksar-grid.js"></script>
```
--
Now you can create grids using the following syntax.. 

```
<div class="col col-{min_value}-{max_value}">
        <!--columns here-->
</div>
```

Where **{min_value}** is the minimum browser width **(in px)**, smaller than which the grid breaks,
and **{max_value}** is the maximum browser width **(in px)**, greater than which the grid breaks again..

**To skip a value set it to zero,**  
For example: `col-480-0`  

This grid will only break if the device width is smaller than **480px**,  
As it's **max_value** is set to **zero**, it will be taken as **infinty**,  
that is, it will never break on any resoultion width greater than the **min_value**  
  
**NOTE:** The **col-XXX-XXX** is the class name javascript is looking for; When it finds such a class, it creates the appropriate css **"@media"** rules at the end of the page..  
The value of **min_value** should be lower than the **max_value**  
  

Columns
---
Just like other responsive grid systems, **sksar-grid** also contains a **12 column layout**  
with colummn class starting from `.col-1` to `.col-12`  
  
**Example**
```
<div class="col-3"> Column of width 3 units</div>
<div class="col-4"> Column of width 4 units</div>
<div class="col-5"> Column of width 5 units</div>
```

**Make sure the column unit values add up to 12 in any column container..**  

Dynamic Grids
---
If you create grids **dynamically** using code, then they will not **behave properly**,  
You have two approaches then,  


**1)** Already define a grid using the appropriate class you want, like `col-480-1200`,  
   and use the css class for your dynamically created grids, the browser will automatically do the job,  
**2)** Or, create the grid with whatever class name you like,  
   and call the `sksarGrid.gridify()` function **to reinintalise all grids on the page**..

Sample code
---
**Example 1:** A grid that breaks when browser width is less than 480 px, also when its greater than 800px  
and it contains a **4 unit** and **8 unit** columns respectively, which **adds up to 12** (4+8)
```
<div class="col col-480-800">
       <div class="col-4"> Column of width 4 units</div>
       <div class="col-8"> Column of width 8 units</div>
</div>
```  
**Example 2:** A grid that breaks when browser width is less than 480 px, also when its greater than 1200px  
and it contains three **4 unit** columns respectively, which **adds up to 12** (4+4+4)

```
<div class="col col-480-1200">
       <div class="col-4"> Column of width 4 units</div>
       <div class="col-4"> Column of width 4 units</div>
       <div class="col-4"> Column of width 4 units</div>
</div>
```  

Note
---

It is advised to copy the entire style rules contained inside the **sksar-grid.css**, to your html's main style sheet,  
Also it would be better if you use the minified versions of both **sksar-grid.js** and **sksar-grid.css**..

License
---
**sksar-grid** is licensed under the [Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) License](https://creativecommons.org/licenses/by-nd/4.0/)
