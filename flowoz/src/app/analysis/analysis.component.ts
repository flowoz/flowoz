import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  content = '';
  cleanContent = '';
  enabled = {'1x': true, '2x': false, '3x': false};
  paraphs = [];
  words = [];
  words2 = [];
  words3 = [];
  wordsCounter = {};
  wordsCounter2 = {};
  wordsCounter3 = {};
  wordsCounterT = [];
  wordsCounter2T = [];
  wordsCounter3T = [];
  stopWords = [];

  order: string = 'count';
  ascending: boolean = true;
  sortedCollection: any[];

  constructor() {}

  ngOnInit() {

    this.stopWords = [
      "un", "que", "a", "ser", "este", "esta", "y", "es", "el", "al",
      "su", "la", "se", "en", "de", "son", "del", "sus", "las", "así",
      "una", "los", "con", "para", "asi", "o", "le", "ti", "me", "si",
      "ya", "lo", "acá", "sí", "no", "qué", "mas", "más", "1", "2", "3",
      "4", "5", "6", "7", "8", "9", "0"
    ];
    this.content = 'Para interactuar mejor con los clientes y obtener mejores tasas de conversión en sus indicadores de negocio se recomienda definir una personalidad para el chatbot. Esta personalidad debe ser similar al cliente tipo de su producto para mejorar la recepción y empatizar. \n\nEl entregable en este caso es una ficha con el perfilamiento del cliente objetivo y las características de la personalidad del chatbot. Así mismo, se debe incluir una guía de comunicación escrita para aplicar la personalidad del chatbot. El equipo ideal para perfilar esta información son las personas de marketing.';

  }

  enableX(key) {

    this.enabled['1x'] = false;
    this.enabled['2x'] = false;
    this.enabled['3x'] = false;
    this.enabled[key] = true;

  }

  setOrder(value: string) {

    if (this.order === value) {
      this.ascending = !this.ascending;
    } else {
      this.ascending = true;
    }

    this.order = value;

  }

  analyze() {

    // https://github.com/michael-lynch/reading-time
    let wordsPerMinute = 270;
    let neutralContent = this.content.replace(/\n{2,}/g, '\n');
    this.paraphs = neutralContent.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()|]/g,"").split("\n");

    this.cleanContent = this.cleanContent.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()|]/g,"");
    this.cleanContent = this.content.toLowerCase();
    this.cleanContent = this.cleanContent.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()|]/g,"");
    this.cleanContent = this.cleanContent.replace(/\s{2,}/g," ");
    this.words = this.cleanContent.split(" ");
    this.words = this.cleanContent.split(" ");

    if (this.words.length > 3) {

      this.words2 = this.makePairs(this.words);
      this.words3 = this.makeTriads(this.words);

    }

    this.words = this.words.filter(x => !this.stopWords.includes(x));

    this.wordsCounter = this.setCounter(this.words);
    this.wordsCounter2 = this.setCounter(this.words2);
    this.wordsCounter3 = this.setCounter(this.words3);

    this.wordsCounterT = this.setCounterTotals(this.wordsCounter);
    this.wordsCounter2T = this.setCounterTotals(this.wordsCounter2);
    this.wordsCounter3T = this.setCounterTotals(this.wordsCounter3);

  }

  makePairs(words) {
    let pairs = [];
    words.forEach((key, index) => {
      if (index > 0) {
        let toPush = words[index - 1] + " " + key;
        pairs.push(toPush);
      }
    });
    return pairs;
  }

  makeTriads(words) {
    let triad = [];
    words.forEach((key, index) => {
      if (index > 1) {
        let toPush = words[index - 2] + " " + words[index - 1] + " " + key;
        triad.push(toPush);
      }
    });
    return triad;
  }

  setCounter(words) {
    let wordsCounter = {};
    words.forEach((key) => {
      if (key in wordsCounter) {
        wordsCounter[key] = wordsCounter[key] + 1;
      } else {
        wordsCounter[key] = 1;
      }
    });
    return wordsCounter;
  }

  setCounterTotals(counter) {
    let total = [];
    Object.keys(counter).forEach((key) => {
      if (counter[key] > 1) {
        total.push({
          'word': key,
          'count': counter[key]
        })
      }
    });
    return total;
  }

}
