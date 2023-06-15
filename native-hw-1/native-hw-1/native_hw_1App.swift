//
//  native_hw_1App.swift
//  native-hw-1
//
//  Created by user on 15.06.2023.
//

import SwiftUI

@main
struct native_hw_1App: App {
    var body: some Scene {
        DocumentGroup(newDocument: native_hw_1Document()) { file in
            ContentView(document: file.$document)
        }
    }
}
