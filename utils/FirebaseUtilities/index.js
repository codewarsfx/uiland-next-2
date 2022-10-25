export const prepareData = ( snapshot) => { 
    return snapshot.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    })

}
