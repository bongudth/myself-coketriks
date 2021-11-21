```
const routes = [
   {
     path: 'about',
     children: [
       {
         path: 'me', // matches /about/me
       },
       {
         path: 'you', // matches /about/you
       },
     ],
   },
 ]
```