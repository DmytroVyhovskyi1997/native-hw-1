//
//  ContentView.swift
//  native-hw-1
//
//  Created by user on 15.06.2023.
//

import SwiftUI

struct ContentView: View {
    @Binding var document: native_hw_1Document

    var body: some View {
        TextEditor(text: $document.text)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(document: .constant(native_hw_1Document()))
    }
}
