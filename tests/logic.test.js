import test from 'ava';

import { calculaIndice, calculoFeminino, calculoMasculino } from '../src/logic'

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

test('calculoFeminino', t => {
	t.is(calculoFeminino(10, 14.22), "Abaixo do peso")
	t.is(calculoFeminino(10, 0), "Valores inválidos")
	t.is(calculoFeminino(0, 14.22), "Valores inválidos")
	t.is(calculoFeminino(0, 0), "Valores inválidos")
	t.is(calculoFeminino(), "Valores inválidos")
	t.is(calculoFeminino(NaN, 0), "Valores inválidos")
	t.is(calculoFeminino(NaN, NaN), "Valores inválidos")
	t.is(calculoFeminino(Infinity), "Valores inválidos")
	t.is(calculoFeminino(Infinity, Infinity), "Valores inválidos")
	t.is(calculoFeminino(null), "Valores inválidos")
	t.is(calculoFeminino(null, null), "Valores inválidos")
	t.is(calculoFeminino(undefined), "Valores inválidos")
	t.is(calculoFeminino(undefined, undefined), "Valores inválidos")
	t.is(calculoFeminino('undefined'), "Valores inválidos")
	t.is(calculoFeminino([],[]), "Valores inválidos")
});

test('calculoMasculino', t => {
	t.is(calculoMasculino(10, 14.22), "Abaixo do peso")
	t.is(calculoMasculino(10, 0), "Valores inválidos")
	t.is(calculoMasculino(0, 14.22), "Valores inválidos")
	t.is(calculoMasculino(0, 0), "Valores inválidos")
	t.is(calculoMasculino(), "Valores inválidos")
	t.is(calculoMasculino(NaN, 0), "Valores inválidos")
	t.is(calculoMasculino(NaN, NaN), "Valores inválidos")
	t.is(calculoMasculino(Infinity), "Valores inválidos")
	t.is(calculoMasculino(Infinity, Infinity), "Valores inválidos")
	t.is(calculoMasculino(null), "Valores inválidos")
	t.is(calculoMasculino(null, null), "Valores inválidos")
	t.is(calculoMasculino(undefined), "Valores inválidos")
	t.is(calculoMasculino(undefined, undefined), "Valores inválidos")
	t.is(calculoMasculino('undefined'), "Valores inválidos")
	t.is(calculoMasculino([],[]), "Valores inválidos")
});


 

