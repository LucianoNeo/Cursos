const myPromise = new Promise ((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'))
   }, 2000)
})
                                               