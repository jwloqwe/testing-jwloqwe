<template>
  <div class="container">
    <h1>Automation Playground</h1>

    <!-- Form Section -->
    <section>
      <h2>Form</h2>
      <form @submit.prevent="submitForm">
        <input v-model="form.name" placeholder="Name" data-testid="name-input" />
        <br>
        <input v-model="form.email" placeholder="Email" type="email" data-testid="email-input" />
        <br>
        <button class="formBtn" type="submit" data-testid="submit-button">Submit</button>
      </form>
      <p v-if="submitted" data-testid="form-result">Submitted: {{ form.name }} ({{ form.email }})</p>
    </section>

    <!-- Dropdown -->
    <section>
      <h2>Dropdown</h2>
      <select v-model="selectedOption" data-testid="dropdown">
        <option disabled value="">Choose one</option>
        <option>Option A</option>
        <option>Option B</option>
      </select>
      <p class="dropdownMsg" data-testid="dropdown-result">Selected: {{ selectedOption }}</p>
    </section>

    <!-- Modal -->
    <section>
      <h2>Modal</h2>
      <button class="modalBtn" @click="showModal = true" data-testid="open-modal">Open Modal</button>
      <div v-if="showModal" class="modal" data-testid="modal">
        <p>This is a modal!</p>
        <button class="modalCloseBtn" @click="showModal = false" data-testid="close-modal">Close</button>
      </div>
    </section>

    <!-- Table -->
    <section>
      <h2>Table</h2>
      <table data-testid="data-table">
        <thead><tr><th>ID</th><th>Name</th></tr></thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '' })
const submitted = ref(false)
const selectedOption = ref('')
const showModal = ref(false)
const items = ref([
  { id: 1, name: 'Alpha' },
  { id: 2, name: 'Beta' },
])

const submitForm = () => {
  submitted.value = true
}
</script>

<style>
p{
  color:black;
}
.dropdownMsg{
  color:white;
}
.modalCloseBtn{
  background-color: red;
  border: 3px dotted black;
  color: white;
  padding: 10px 25px;
}
.modalBtn{
  background-color: green;
  border: none;
  color: white;
  padding: 10px 25px;
}
.formBtn {
  background-color: green;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
}
.container {
  max-width: 600px;
  margin: auto;
  padding: 2rem;
  font-family: sans-serif;
}
section {
  margin-bottom: 2rem;
}
.modal {
  background: #eee;
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>

