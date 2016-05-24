Here's a basic examples with a list of strings

    let moods = [ 'mediocre', 'mundane', 'zzzzzz' ];
    let mood = state.value || 'fantastic';
    <ComboBox label='Hey, a combobox, how... ' value={mood} options={moods} />

Alternatively you can supply an object where it's keys are used as labels

    <ComboBox label='Another combo, now with key/values' value='Oh' options={{ 'These':10, 'are':20, 'labeled':30}} />
