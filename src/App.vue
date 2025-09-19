<template>
  <Layout>
    <template #left>
      <WidgetPanel01 title="工程统计" />
      <WidgetPanel02 title="工程规模" />
      <WidgetPanel03 title="系统公告" />
    </template>
    <template #right>
      <WidgetPanel04 title="工程站点列表" />
      <WidgetPanel05 title="雨情监控 " />
      <WidgetPanel06 title="水情监控" />
    </template>
    <template #middle>
      <WidgetMap />
    </template>
  </Layout>
</template>
<script setup lang="ts">
import {
  WidgetPanel01,
  WidgetPanel02,
  WidgetPanel03,
  WidgetPanel04,
  WidgetPanel05,
  WidgetPanel06,
  WidgetMap,
} from "@/components";
import { Layout } from "@/layout";
</script>
