import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/';
import './it-spa.scss';
import $ from 'jquery';
import { Router } from './router/router';
import { nav } from './navigation/nav';

const main = $('#app');//main');

const router = new Router();

router.mount(main);

router.init();

main.before(nav());

$('.carousel').carousel({
    interval: 1000
  })
