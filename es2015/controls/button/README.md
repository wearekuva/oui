Here's a simple counter example. You click the button and it increments a counter

    let count = state.count || 0;
    let increment = _ => setState({ count:count + 1 });
    let label = 'This is a Button! ';
    <Button label={label + count} onClick={ increment }/>
