# scroll-nav.js

## Introduction

scroll-nav.js is a small (751 B), dependency free JavaScript plugin for single page 
navigation with active highlighting. Useful for creating a navigation for a 
single page website, or anything else you might think of.

## Getting Started

### Install

```
<script src="[your assets directory]/scroll-nav.min.js"></script>
```

### Usage

#### Markup

```
<nav>
    <ul>
        <li>
            <a href="#section-1">Section 1</a> 
        </li>
        <li>
            <a href="#section-2">Section 2</a> 
        </li>
        <li>
            <a href="#section-3">Section 3</a> 
        </li>
    </ul>
</nav>
...
<div id="section-1" class="section">Section 1</div>
<div id="section-2" class="section">Section 2</div>
<div id="section-3" class="section">Section 3</div>
...
```
#### Initialize

scroll-nav.js works with a [nodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
provided to the init() method.

```
const sections = document.querySelectorAll('section');
scrollNav.init(sections);
```

#### Styles

To keep the plugin simple there are no styles added to the navigation.
