# Omly

Omly is concat between omit and only, a small functions that pick or remove specific notation of object. Basically this is already existed on Typescript, but because I don't use it, and I very like it... so I made omly to help my journey. Feel free to use it.

## Omit

You can use this function for remove notation based on provided array or string
```javascript
const { Omit } = require("omly")

const base = {
    name: 'Rizkiansyah',
    age: 35,
    feature: 'tall'
}

console.log(Omit(base, ['feature', 'age']))
// this return => { name: 'Rizkiansyah' }

console.log(Omit(base, ['age']))
// this return => { name: 'Rizkiansyah', feature: 'tall' }

console.log(Omit(base, ['name', 'age', 'feature']))
// this return => { }

console.log(Omit(base, 'name'))
// this return => { feature: 'tall', age: 35 }
```

## Only

You can use this function to keep selected notation based on provided array or string
```javascript
const { Only } = require("omly")

const base = {
    name: 'Rizkiansyah',
    age: 35,
    feature: 'tall'
}

console.log(Only(base, ['feature', 'age']))
// this return => { age: 35, feature: 'tall' }

console.log(Only(base, ['age']))
// this return => { age: 35 }

console.log(Only(base, ['name', 'age', 'feature']))
// this return => { name: 'Rizkiansyah', age: 35, feature: 'tall' }

console.log(Only(base, 'name'))
// this return => { name: 'Rizkiansyah' }
```

### Difference between Array and String
The array can remove/keep multiple notation, whilst the string only target for single notation

### Related to Typescript 
Why not using omit style on Typescript ? `Omit<base, "name || age">` especially the "string"... well basically it's just small function for me, to gain more advanced feature like that, I encourage you to learn or use Typescript, thought it's great feature too

### Capability
This small function, Omit or Only is capable to scan one layer of object
```javascript
const alternative = {
    anime: ['one punch man', 'junji ito collection'],
    movie: 'spirited away',
    other: 'studio ghibli'
}

// on above object, the Omit and Only capable to keep or remove
// one of the three notation, but on multiple layers of notation like this...

const alternative = {
    anime: ['one punch man', 'junji ito collection'],
    movie: 'spirited away',
    other: {
        studio: 'ghibli',
        game: 'mobile legends',
        laptop: [
            'msi alpha 15',
            'lenovo legion 15'
        ]
    }
}

// Omit and Only capable to keep or remove the first layer which are
// `anime`, `movie` and `other` notation, whilst if trying to remove
// specific notation inside `other` notation like `studio` or `laptop`
// it's will failed, though will processing the other notation that found
```