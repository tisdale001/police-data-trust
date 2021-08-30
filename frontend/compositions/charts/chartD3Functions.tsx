import { select } from "d3";
import { DataPoint, JoinSelection, JoinTransition } from "./chartTypes";

export function addLabel(d: DataPoint, i: number) {
  return select("#chart-root g")
    .append("text")
    .text(d.label)
    .attr("color", "grey")
    .attr("font-size", "1em")
    .attr("x", d.coord.x)
    .attr("y", d.coord.y)
    .attr("z-index", 1000)
}


export const funcTransition = (t: JoinTransition) => {
  return t.delay((d, i) => i * 10).duration(500)
}

export const testTransition = (t: JoinSelection) => {
  return t.transition().delay((d, i) => i * 10).duration(500)
}

