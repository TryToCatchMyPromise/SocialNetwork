import {Field, Form, Formik} from 'formik'
import {FC, memo} from 'react'
import {useSelector} from 'react-redux'
import {useUsers} from 'src/hooks/useUsers'
import {FilterType} from 'src/Redux/users-reducer'
import {getUsersFilter} from 'src/Redux/users-selectors'

const usersSearchFormValidate = (values: any) => {
  return {}
}

type FriendFormType = 'true' | 'false' | 'null'
type FormType = {
  term: string
  friend: FriendFormType
}

export const UsersSearchForm: FC = memo(() => {

  const filter = useSelector(getUsersFilter)
  const {onFilterChanged} = useUsers()

  const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
    const filter: FilterType = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === 'true'
    }

    onFilterChanged(filter)
    setSubmitting(false)
  }

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({isSubmitting}) => (
          <Form>
            <Field type="text" name="term"/>
            <Field name="friend" as="select">
              <option value="null">All</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )


})
