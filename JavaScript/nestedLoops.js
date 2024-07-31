let heroes =[["ironman","spiderman","thor"],["superman","flash","batman"]];
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i])
    for(let j=0;j<heroes[i];j++){
        console.log(`j=${j},${heroes[i][j]}`);
    }
}