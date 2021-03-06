import { Controller, Context } from 'stimulus'
import { useApplication } from './use-application'

interface EventArgs {
  target: any
  detail: any
  bubbles: boolean
}

export class ApplicationController extends Controller {
  readonly isPreview: boolean = false
  readonly csrfToken: string = ''

  constructor(context: Context) {
    super(context)
    useApplication(this)
  }

  // define function for Typescript but they are overwitten by useApplication
  dispatch(eventName: String, eventArgs: EventArgs) {}

  metaValue(name: string): string {
    return ''
  }
}
