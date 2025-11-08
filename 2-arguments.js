const args = process.argv

if (process.argv[1] === 0) {
    console.log("NO agrument");
}
else if (process.argv[0]  === 1){
    console.log("agrument found")
}
else{
    console.log("Argument found")
}