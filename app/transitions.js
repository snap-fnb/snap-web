export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('snap'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}