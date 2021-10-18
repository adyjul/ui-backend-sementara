const mySteps = [{
    content: 'Hello World!',
    label: 'Custom label'
  },{
    content: 'This is a multi-step modal'
  },{
    content: 'You can have skip options',
    skip:true
  },{
    content: `<small>You can include html content as well!</small><br><br><div class="form-group"><label for="exampleInputEmail1">Email address</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"><small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small></div>`,
    skip: true
  },{
    content: 'This is the end<br>Hold your breath and count to ten',
}]

$('.modal').MultiStep({
    data: mySteps,
    final: 'Are you sure you want to confirm?',
    finalLabel: 'Complete'
});

$('.modal').MultiStep({
    data: mySteps,
    title: 'Your Title Here'
});