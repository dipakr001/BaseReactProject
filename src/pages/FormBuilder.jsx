import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import data from './FormIO.json';

export default function FormBuilderPage() {
  const [formSchema, setFormSchema] = useState('');

  useEffect(() => {
    window.Formio.builder(document.getElementById('builder')).then(
      (builder) => {
        builder.on('saveComponent', () => {
          setFormSchema(JSON.stringify(builder.schema));
        });
      },
    );
  }, []);

  useEffect(() => {
    if (formSchema !== '') {
      const jsonSchema = JSON.parse(formSchema);
      window.Formio.createForm(document.getElementById('fromio'), jsonSchema);
    }
    window.Formio.createForm(document.getElementById('fromio2'), data);
  }, [formSchema]);

  return (
    <Container sx={{ my: 4 }}>
      <Grid item xs={12} md={12}>
        <div id="builder" />
        <br />
        <div>
          <h2>Schema</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{formSchema}</pre>
        </div>

        <h2>Form Rendering</h2>
        <div id="fromio" />

        <hr style={{ height: '5px', background: '#000' }} />

        <div id="fromio2" />
      </Grid>
    </Container>
  );
}
