import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

FlowRouter.route('/', {
  title: 'esee',
  action() {
    this.render('mainLayout', 'Home')
  },
  waitOn() {
    return import('../components/Home/HomeComponent.js')
  },
})
