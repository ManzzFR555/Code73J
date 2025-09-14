Error: EISDIR: illegal operation on a directory, open 'plugins'
    at Object.writeFileSync (node:fs:2343:20)
    at Object.handler (file:///home/container/plugins/owner-sf.js:6:14)
    at Object.handler (file:///home/container/handler.js?update=1708702063297:814:34)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  errno: -21,
  code: 'EISDIR',
  syscall: 'open',
  path: 'plugins'
}