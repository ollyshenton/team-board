import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";
import AddCard from "../AddCard.vue";

describe("AddCard", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("test click add shows inputs below", () => {
    const wrapper = mount(AddCard, { props: {} });

    expect(wrapper.find("#add")).toBeTruthy();
    wrapper.find("#add").trigger("click");

    expect(wrapper.find(".input")).toBeTruthy();
  });
});
