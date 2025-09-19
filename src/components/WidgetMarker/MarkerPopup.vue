<template>
  <div class="">
    <Descriptions :column="1">
      <DescriptionsItem label="工程规模">
        <Tag>小（1）型水库</Tag>
      </DescriptionsItem>
      <DescriptionsItem label="坝体类型">
        <Tag>混凝土坝</Tag>
      </DescriptionsItem>
      <DescriptionsItem label="当前水位">
        <Tag>11m</Tag>
      </DescriptionsItem>
      <DescriptionsItem label="当前库容">
        <Tag>10.23万m³</Tag>
      </DescriptionsItem>
      <DescriptionsItem label="设备数量">
        <Tag>12台</Tag>
      </DescriptionsItem>
      <DescriptionsItem label="测点数量">
        <Tag>123个</Tag>
      </DescriptionsItem>
    </Descriptions>
  </div>
</template>
<script setup lang="ts">
import {
  Descriptions,
  DescriptionsItem,
  Tag,
  Button,
  Link,
  Spin,
} from "@arco-design/web-vue";
// interface PropsType {}
// const props = defineProps<PropsType>()
</script>
<!-- <style lang="scss" scoped></style> -->
