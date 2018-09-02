# Data listings Component

### we use &nbsp; [chartjs](http://www.chartjs.org/) plugin.


This component draw all charts you need depend on your json

Use chart component:

1. import ChartsBuilder component in your page

``` js
  import ChartsBuilder from '@/components/chartsBuilder/ChartsBuilder.vue'
```

2. add the component in components object inside Vue instance

``` js
  export default {
    ...,
    components: {
      'chart-builder': ChartsBuilder
    }
  }
```

3. add custom component in your HTML;

``` html
  <chart-builder url="..."></chart-builder>
```

#### component parameters

1. URL : (string) required parameter, and that's refer to your charts data source
2. default Options : (Object) optional parameter, you can add your default options that will applied to all charts, you can find all options you need in the [documentation](http://www.chartjs.org/docs/latest/)

#### component actions

1. activeCharts : this event contains all charts in the page and you can change or update any chart by it's name

``` html
  <chart-builder url="..." @activeCharts="getCharts"></chart-builder>
```

``` js
  export default {
    ...,
    methods: {
      getCharts($event){
        // $event is object contain all charts
        ...
      }
    }
  }
```


#### JSON Structure

``` json
  {
    "type": "bar",
    "name": "chart1",
    "title": "Bar Chart",
    "size": 3,
    "order": 6,
    "export": true,
    "priority": 1,
    "data": {},
    "options": {}
  }
```

1. type: chart type, all types can found [here](http://www.chartjs.org/docs/latest/charts/)
2. name: name for this chart, must be unique
3. title: chart title
4. size: chart size in the screen, available sizes:
  * '1' = screen / 3
  * '1.5' = screen / 1.5
  * '2' = screen / 2
  * '3' = full screen
5. order: chart order in the screen, order '1' will draw first
6. export: enable download as png button
7. priority: this option for lazy loading charts and request them as a chunks instead of one request, you can group all charts you need in each request by give it the same priority number, and the component will request each priority after another and its start from 1, if you need all charts to return in the same request just give priority one for all of them.
8. data: contains (labels, dataset, colors), you can find the structure [here](http://www.chartjs.org/docs/latest/getting-started/usage.html)
9. options: add specific options for this chart, check options [here](http://www.chartjs.org/docs/latest/)
