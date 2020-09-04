grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./src --grpc_out=./src --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` proto/proto/wrongthink.proto
