import React, { useState } from 'react';

function UrlForm() {

  const [title, setTitle] = useState('')
  const [urlToShorten] = useState('')

  const handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    this.clearInputs();
  }

  const clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }


  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={e => handleNameChange(e)}
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='title'
        value={title}
        onChange={e => handleNameChange(e)}
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  )

}

export default UrlForm;
