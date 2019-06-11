import test from 'ava';

import { calculaIndice } from '../src/logic'

test('calculaIndice', t => {
	t.is(calculaIndice(85, 175), 27.7551)
	t.is(calculaIndice(85, 0), 0)
	t.is(calculaIndice(0, 175), 0)
	t.is(calculaIndice(0, 0), 0)
	t.is(calculaIndice(0), 0)
	t.is(calculaIndice(), 0)
	t.is(calculaIndice(NaN), 0)
	t.is(calculaIndice(NaN, NaN), 0)
	t.is(calculaIndice(Infinity), 0)
	t.is(calculaIndice(Infinity, Infinity), 0)
	t.is(calculaIndice(null), 0)
	t.is(calculaIndice(null, null), 0)
	t.is(calculaIndice(undefined), 0)
	t.is(calculaIndice(undefined, undefined), 0)
	t.is(calculaIndice('undefined'), 0)
	t.is(calculaIndice([], []), 0)
});