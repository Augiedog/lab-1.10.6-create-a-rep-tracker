let reps;
let savedReps = localStorage.getItem('reps')
if(savedReps === null){
    reps = []
} else {
    reps = JSON.parse(savedReps)
}
let newNumberReps = window.prompt('Enter your completed number of reps:  ')
reps.push(newNumberReps)
renderChart(reps)
savedReps = JSON.stringify(reps)
localStorage.setItem('reps', savedReps)

let pullUps;
let savedpullUps = localStorage.getItem('pullUps')
if(savedpullUps === null){
    pullUps = []
} else {
    pullUps = JSON.parse(savedpullUps)
}
let newNumberpullUps = window.prompt('Enter your number of Pull Up\' s:  ')
pullUps.push(newNumberpullUps)
renderChart(pullUps)
savedpullUps = JSON.stringify(pullUps)
localStorage.setItem('pullUps', savedpullUps)


// As soon as a user opens the app, they should be able to:

// Enter the number of push-ups they've just completed.
// Enter the number of sit-ups they've just completed.
// Enter the number of squats they've just completed.
// Enter the number of laps they've just run.
// See a chart for each of these four exercises, displaying data from all of their past entries.