<template>
  <ExampleTabsCard title="Validation" section-id="validation" :code="exampleCode">
    <p>Every <code>vs-...-field</code> component has built-in validation. You can manage validation with <code>rules</code> prop.</p>
    <p>Some rules are automatically applied if the field contains certain attributes. For example, the <code>required</code> attribute will make the field required.</p>
    <p>You can read more about validation in <a href="#">this</a> article.</p>

    <vs-checkbox-field v-model="isTooltipFeedback" label="Tooltip validation messages" :wrapper-attrs="{'class': 'mb-3'}" switch/>
    <div class="row g-3">
      <div class="col-md-4">
        <div class="position-relative">
          <vs-text-field v-model="formValues.firstName" label="First name" required :tooltip-feedback="isTooltipFeedback" valid-message="Looks good!"/>
        </div>
      </div>
      <div class="col-md-4">
        <div class="position-relative">
          <vs-text-field v-model="formValues.lastName" label="Last name" required :tooltip-feedback="isTooltipFeedback" valid-message="Looks good!"/>
        </div>
      </div>
      <div class="col-md-4">
        <div class="position-relative">
          <vs-text-field v-model="formValues.username" label="Username" required prepend="@" :tooltip-feedback="isTooltipFeedback" invalid-message="Please choose a unique and valid username."/>
        </div>
      </div>
      <div class="col-md-6">
        <div class="position-relative">
          <vs-text-field v-model="formValues.city" label="City" required :tooltip-feedback="isTooltipFeedback" invalid-message="Please provide a valid city." />
        </div>
      </div>
      <div class="col-md-3">
        <label for="validationCustom04" class="form-label">State</label>
        <select id="validationCustom04" class="form-select" required>
          <option selected disabled value="">Choose...</option>
          <option>...</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid state.
        </div>
      </div>
      <div class="col-md-3">
        <div class="position-relative">
          <vs-text-field v-model="formValues.zip" label="Zip" required invalid-message="Please provide a valid zip." />
        </div>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input id="invalidCheck" class="form-check-input" type="checkbox" value="" required>
          <label class="form-check-label" for="invalidCheck">
            Agree to terms and conditions
          </label>
          <div class="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" @click="validate">Validate form</button>
        <button class="ms-1 btn btn-secondary" @click="reset">Reset validation</button>
        <button class="ms-1 btn btn-dark" @click="formValues.firstName = 'Olaf'">Set First name = 'Olaf'</button>
        <button class="ms-1 btn btn-dark" @click="formValues.firstName = 'Mark'">Set First name = 'Mark'</button>
      </div>
    </div>
    <hr/>
    validation value: <code>{{ printVar(isValid) }}</code>
    <br />
    validation errors: <code>{{ printVar(errors) }}</code>
    <br />
    v-model value: <code>{{ printVar(formValues) }}</code>
  </ExampleTabsCard>
</template>
<script setup lang="ts">
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"
import {useValidation, VsCheckboxField, VsTextField} from "@lib"
import {computed, ref} from "vue"
import useDump from "../../../composables/useDump"

const {printVar} = useDump()

const formValues = ref({
    firstName: "Mark",
    lastName: "Otto",
    username: "",
    city: "",
    state: "",
    zip: ""
})
const isTooltipFeedback = ref(false)
const {isValid, validate, reset, errors} = useValidation()

const exampleCode = computed(() => {
    const tooltipFeedbackAttr = isTooltipFeedback.value ? " tooltip-feedback" : ""
    return `<vs-text-field v-model="firstName" label="First name" required valid-message="Looks good!"${tooltipFeedbackAttr}/>
<vs-text-field v-model="lastName" label="Last name" required valid-message="Looks good!"${tooltipFeedbackAttr}/>
<vs-text-field v-model="city" label="City" required invalid-message="Please provide a valid city."${tooltipFeedbackAttr}/>
<vs-text-field v-model="zip" label="Zip" required invalid-message="Please provide a valid zip."${tooltipFeedbackAttr}/>
`
})
</script>