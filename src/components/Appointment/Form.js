import React, { useState } from 'react';

import Button from '../Button';
import InterviewerList from '../InterviewerList';

export default function Form(props) {
  //useStates
  const [student, setStudent] = useState(props.student || '');
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState('');

  //reseting input func
  const reset = () => {
    setStudent('');
    setInterviewer(null);
    props.onCancel();
  };

  // const cancel = () => {
  //   reset();
  //   props.onCancel();
  // };

  // const save = () => {
  //   return props.onSave(student, interviewer);
  // };

  //VALIDATION if student does not input name or does not choose an interviwer
  function validate() {
    if (student === '') {
      setError('Student name cannot be blank');
      return;
    }

    if (interviewer === null) {
      setError('Please select an interviewer to book your appointment');
      return;
    }

    setError('');
    props.onSave(student, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={(event) => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            value={student}
            name="name"
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setStudent(event.target.value)}
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{error}</section>
        </form>

        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={(id) => {
            setInterviewer(id);
          }}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={reset}>
            Cancel
          </Button>
          <Button confirm onClick={() => validate()}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
