// src/components/RegistrationForm.tsx

import { useReducer } from 'react'

interface FormState {
  name:     string
  lastname: string
  email:    string
  password: string
  errors:   Partial<Record<'name' | 'email' | 'password'|'lastname', string>>
  status:   'idle' | 'submitting' | 'success' | 'error' |'validating'
}

type FormAction =
  | { type: 'SET_FIELD'; field: keyof Pick<FormState, 'name' | 'lastname' | 'email' | 'password'>; value: string }
  | { type: 'SET_ERRORS'; errors: FormState['errors'] }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_VALIDATING' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR' }
  | { type: 'RESET' }

const INITIAL_STATE: FormState = {
  name:     '',
  lastname: '',
  email:    '',
  password: '',
  errors:   {},
  status:   'idle',
}

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        // Limpia el error del campo al escribir
        errors: { ...state.errors, [action.field]: undefined },
      }
    case 'SET_ERRORS':
      return { ...state, errors: action.errors }
    case 'SUBMIT_START':
      return { ...state, status: 'submitting' }
    case 'SUBMIT_VALIDATING':
      return { ...state, status: 'validating' }
    case 'SUBMIT_SUCCESS':
      return { ...INITIAL_STATE, status: 'success' }
    case 'SUBMIT_ERROR':
      return { ...state, status: 'error' }
    case 'RESET':
      return INITIAL_STATE
  }
}

export default function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE)

  function validate(): boolean {
    const errors: FormState['errors'] = {}
    if (!state.name.trim())         errors.name     = 'El nombre es requerido'
    if (!state.lastname.trim())         errors.lastname     = 'El apellido es requerido'
    if (!state.email.includes('@')) errors.email    = 'Email inválido'
    if (state.password.length < 6)  errors.password = 'Mínimo 6 caracteres'

    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors })
      return false
    }
    return true
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return

    dispatch({ type: 'SUBMIT_START' })
    // Simulación de llamada a API
    await new Promise((resolve) => setTimeout(resolve, 1200))
    dispatch({ type: 'SUBMIT_VALIDATING' })
    // Simulación de llamada a API
    await new Promise((resolve) => setTimeout(resolve, 1200))
    dispatch({ type: 'SUBMIT_SUCCESS' })
  }

  const isSubmitting = state.status === 'submitting'
  const isValidatig = state.status === 'validating'

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}
    >
      {state.status === 'success' && (
        <div style={{ padding: 12, background: '#065f46', borderRadius: 6, color: '#34d399', border: '1px solid #059669' }}>
          🪦 Alma registrada exitosamente en el panteón
        </div>
      )}

      <div>
        <input
          value={state.name}
          onChange={(e) =>
            dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })
          }
          placeholder="Nombre del difunto"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.name)}
        />
        {state.errors.name && (
          <p style={errorStyle}>{state.errors.name}</p>
        )}
      </div>
      <div>
        <input
          value={state.lastname}
          onChange={(e) =>
            dispatch({ type: 'SET_FIELD', field: 'lastname', value: e.target.value })
          }
          placeholder="Apellido de la estirpe"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.lastname)}
        />
        {state.errors.lastname && (
          <p style={errorStyle}>{state.errors.lastname}</p>
        )}
      </div>
      <div>
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })
          }
          placeholder="Correo hacia el más allá"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.email)}
        />
        {state.errors.email && (
          <p style={errorStyle}>{state.errors.email}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: 'SET_FIELD', field: 'password', value: e.target.value })
          }
          placeholder="Contraseña de la cripta (mín. 6)"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.password)}
        />
        {state.errors.password && (
          <p style={errorStyle}>{state.errors.password}</p>
        )}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            flex: 1, padding: '10px',
            background: isSubmitting || isValidatig? '#5b21b6' : '#7c3aed',
            color: '#fff', border: 'none', borderRadius: 6,
            cursor: isSubmitting || isValidatig? 'not-allowed' : 'pointer',
            fontWeight: 500,
          }}
        >
          {isSubmitting ? 'Inscribiendo lápida...' : isValidatig ? 'Validando conjuros...' : 'Inscribir en cripta'}
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'RESET' })}
          disabled={isSubmitting}
          style={{
            padding: '10px 16px',
            background: '#374151', color: '#d1d5db',
            border: 'none', borderRadius: 6, cursor: 'pointer',
          }}
        >
          Limpiar
        </button>
      </div>
    </form>
  )
}

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width: '100%',
    padding: '8px 12px',
    border: `1px solid ${hasError ? '#f87171' : '#374151'}`,
    borderRadius: 6,
    fontSize: 14,
    boxSizing: 'border-box',
    backgroundColor: '#0b0f19',
    color: '#d1d5db',
  }
}

const errorStyle: React.CSSProperties = {
  margin: '4px 0 0',
  fontSize: 12,
  color: '#f87171',
}